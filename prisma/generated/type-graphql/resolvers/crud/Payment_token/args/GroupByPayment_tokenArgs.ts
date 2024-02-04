import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenOrderByWithAggregationInput } from "../../../inputs/Payment_tokenOrderByWithAggregationInput";
import { Payment_tokenScalarWhereWithAggregatesInput } from "../../../inputs/Payment_tokenScalarWhereWithAggregatesInput";
import { Payment_tokenWhereInput } from "../../../inputs/Payment_tokenWhereInput";
import { Payment_tokenScalarFieldEnum } from "../../../../enums/Payment_tokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenWhereInput, {
    nullable: true
  })
  where?: Payment_tokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Payment_tokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"token" | "expires">;

  @TypeGraphQL.Field(_type => Payment_tokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Payment_tokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

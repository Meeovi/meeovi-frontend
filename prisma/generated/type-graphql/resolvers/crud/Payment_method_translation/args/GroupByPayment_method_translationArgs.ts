import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_method_translationOrderByWithAggregationInput } from "../../../inputs/Payment_method_translationOrderByWithAggregationInput";
import { Payment_method_translationScalarWhereWithAggregatesInput } from "../../../inputs/Payment_method_translationScalarWhereWithAggregatesInput";
import { Payment_method_translationWhereInput } from "../../../inputs/Payment_method_translationWhereInput";
import { Payment_method_translationScalarFieldEnum } from "../../../../enums/Payment_method_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPayment_method_translationArgs {
  @TypeGraphQL.Field(_type => Payment_method_translationWhereInput, {
    nullable: true
  })
  where?: Payment_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Payment_method_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"payment_method_id" | "language_id" | "name" | "distinguishable_name" | "description" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Payment_method_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Payment_method_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

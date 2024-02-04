import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagOrderByWithAggregationInput } from "../../../inputs/Shipping_method_tagOrderByWithAggregationInput";
import { Shipping_method_tagScalarWhereWithAggregatesInput } from "../../../inputs/Shipping_method_tagScalarWhereWithAggregatesInput";
import { Shipping_method_tagWhereInput } from "../../../inputs/Shipping_method_tagWhereInput";
import { Shipping_method_tagScalarFieldEnum } from "../../../../enums/Shipping_method_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagWhereInput, {
    nullable: true
  })
  where?: Shipping_method_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Shipping_method_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"shipping_method_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Shipping_method_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Shipping_method_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

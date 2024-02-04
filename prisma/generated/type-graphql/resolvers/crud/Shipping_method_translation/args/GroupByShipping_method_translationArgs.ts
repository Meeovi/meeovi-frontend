import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_translationOrderByWithAggregationInput } from "../../../inputs/Shipping_method_translationOrderByWithAggregationInput";
import { Shipping_method_translationScalarWhereWithAggregatesInput } from "../../../inputs/Shipping_method_translationScalarWhereWithAggregatesInput";
import { Shipping_method_translationWhereInput } from "../../../inputs/Shipping_method_translationWhereInput";
import { Shipping_method_translationScalarFieldEnum } from "../../../../enums/Shipping_method_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShipping_method_translationArgs {
  @TypeGraphQL.Field(_type => Shipping_method_translationWhereInput, {
    nullable: true
  })
  where?: Shipping_method_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Shipping_method_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"shipping_method_id" | "language_id" | "name" | "description" | "tracking_url" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Shipping_method_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Shipping_method_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

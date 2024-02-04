import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodOrderByWithAggregationInput } from "../../../inputs/App_shipping_methodOrderByWithAggregationInput";
import { App_shipping_methodScalarWhereWithAggregatesInput } from "../../../inputs/App_shipping_methodScalarWhereWithAggregatesInput";
import { App_shipping_methodWhereInput } from "../../../inputs/App_shipping_methodWhereInput";
import { App_shipping_methodScalarFieldEnum } from "../../../../enums/App_shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  where?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_shipping_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "app_name" | "shipping_method_id" | "original_media_id" | "identifier" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_shipping_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_shipping_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

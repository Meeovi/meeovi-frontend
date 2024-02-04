import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_shipping_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_shipping_methodOrderByWithRelationAndSearchRelevanceInput";
import { App_shipping_methodWhereInput } from "../../../inputs/App_shipping_methodWhereInput";
import { App_shipping_methodWhereUniqueInput } from "../../../inputs/App_shipping_methodWhereUniqueInput";
import { App_shipping_methodScalarFieldEnum } from "../../../../enums/App_shipping_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_shipping_methodArgs {
  @TypeGraphQL.Field(_type => App_shipping_methodWhereInput, {
    nullable: true
  })
  where?: App_shipping_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_shipping_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_shipping_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "app_name" | "shipping_method_id" | "original_media_id" | "identifier" | "created_at" | "updated_at"> | undefined;
}

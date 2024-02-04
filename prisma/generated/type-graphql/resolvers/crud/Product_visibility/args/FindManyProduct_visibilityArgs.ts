import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_visibilityOrderByWithRelationAndSearchRelevanceInput";
import { Product_visibilityWhereInput } from "../../../inputs/Product_visibilityWhereInput";
import { Product_visibilityWhereUniqueInput } from "../../../inputs/Product_visibilityWhereUniqueInput";
import { Product_visibilityScalarFieldEnum } from "../../../../enums/Product_visibilityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  where?: Product_visibilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_visibilityOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_visibilityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_visibilityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_id" | "product_version_id" | "sales_channel_id" | "visibility" | "created_at" | "updated_at"> | undefined;
}

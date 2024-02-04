import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_mediaOrderByWithRelationAndSearchRelevanceInput";
import { Product_mediaWhereInput } from "../../../inputs/Product_mediaWhereInput";
import { Product_mediaWhereUniqueInput } from "../../../inputs/Product_mediaWhereUniqueInput";
import { Product_mediaScalarFieldEnum } from "../../../../enums/Product_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  where?: Product_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_mediaOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_mediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "position" | "product_id" | "product_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

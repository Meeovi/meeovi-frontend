import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_translationWhereInput } from "../../../inputs/Product_translationWhereInput";
import { Product_translationWhereUniqueInput } from "../../../inputs/Product_translationWhereUniqueInput";
import { Product_translationScalarFieldEnum } from "../../../../enums/Product_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  where?: Product_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "language_id" | "meta_description" | "name" | "keywords" | "description" | "meta_title" | "pack_unit" | "custom_fields" | "slot_config" | "created_at" | "updated_at" | "pack_unit_plural" | "custom_search_keywords"> | undefined;
}

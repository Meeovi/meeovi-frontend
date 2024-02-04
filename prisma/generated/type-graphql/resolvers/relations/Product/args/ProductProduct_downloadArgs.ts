import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_downloadOrderByWithRelationAndSearchRelevanceInput";
import { Product_downloadWhereInput } from "../../../inputs/Product_downloadWhereInput";
import { Product_downloadWhereUniqueInput } from "../../../inputs/Product_downloadWhereUniqueInput";
import { Product_downloadScalarFieldEnum } from "../../../../enums/Product_downloadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ProductProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  where?: Product_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_downloadOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_downloadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "position" | "product_id" | "product_version_id" | "media_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

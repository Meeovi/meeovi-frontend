import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_tagOrderByWithRelationAndSearchRelevanceInput";
import { Product_tagWhereInput } from "../../../inputs/Product_tagWhereInput";
import { Product_tagWhereUniqueInput } from "../../../inputs/Product_tagWhereUniqueInput";
import { Product_tagScalarFieldEnum } from "../../../../enums/Product_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  where?: Product_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "tag_id"> | undefined;
}

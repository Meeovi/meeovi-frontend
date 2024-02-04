import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_manufacturerOrderByWithRelationAndSearchRelevanceInput";
import { Product_manufacturerWhereInput } from "../../../inputs/Product_manufacturerWhereInput";
import { Product_manufacturerWhereUniqueInput } from "../../../inputs/Product_manufacturerWhereUniqueInput";
import { Product_manufacturerScalarFieldEnum } from "../../../../enums/Product_manufacturerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProduct_manufacturerOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_manufacturerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_manufacturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "link" | "media_id" | "created_at" | "updated_at"> | undefined;
}

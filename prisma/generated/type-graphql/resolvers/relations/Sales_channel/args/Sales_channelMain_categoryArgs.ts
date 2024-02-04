import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Main_categoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Main_categoryOrderByWithRelationAndSearchRelevanceInput";
import { Main_categoryWhereInput } from "../../../inputs/Main_categoryWhereInput";
import { Main_categoryWhereUniqueInput } from "../../../inputs/Main_categoryWhereUniqueInput";
import { Main_categoryScalarFieldEnum } from "../../../../enums/Main_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelMain_categoryArgs {
  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  where?: Main_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Main_categoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Main_categoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "product_id" | "product_version_id" | "category_id" | "category_version_id" | "sales_channel_id" | "created_at" | "updated_at"> | undefined;
}

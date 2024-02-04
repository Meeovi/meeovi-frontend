import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_typeOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_typeWhereInput } from "../../../inputs/Sales_channel_typeWhereInput";
import { Sales_channel_typeWhereUniqueInput } from "../../../inputs/Sales_channel_typeWhereUniqueInput";
import { Sales_channel_typeScalarFieldEnum } from "../../../../enums/Sales_channel_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeWhereInput, {
    nullable: true
  })
  where?: Sales_channel_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "cover_url" | "icon_name" | "screenshot_urls" | "created_at" | "updated_at"> | undefined;
}

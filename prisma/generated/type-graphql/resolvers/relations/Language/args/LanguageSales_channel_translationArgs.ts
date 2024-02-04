import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channel_translationOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_translationWhereInput } from "../../../inputs/Sales_channel_translationWhereInput";
import { Sales_channel_translationWhereUniqueInput } from "../../../inputs/Sales_channel_translationWhereUniqueInput";
import { Sales_channel_translationScalarFieldEnum } from "../../../../enums/Sales_channel_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageSales_channel_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_translationWhereInput, {
    nullable: true
  })
  where?: Sales_channel_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channel_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channel_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channel_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "language_id" | "name" | "home_keywords" | "home_meta_description" | "home_meta_title" | "home_name" | "home_enabled" | "home_slot_config" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

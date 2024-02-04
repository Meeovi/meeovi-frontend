import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageOrderByWithAggregationInput } from "../../../inputs/Swag_language_pack_languageOrderByWithAggregationInput";
import { Swag_language_pack_languageScalarWhereWithAggregatesInput } from "../../../inputs/Swag_language_pack_languageScalarWhereWithAggregatesInput";
import { Swag_language_pack_languageWhereInput } from "../../../inputs/Swag_language_pack_languageWhereInput";
import { Swag_language_pack_languageScalarFieldEnum } from "../../../../enums/Swag_language_pack_languageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_language_pack_languageArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereInput, {
    nullable: true
  })
  where?: Swag_language_pack_languageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_language_pack_languageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_language_pack_languageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_language_pack_languageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "administration_active" | "sales_channel_active" | "language_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_language_pack_languageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

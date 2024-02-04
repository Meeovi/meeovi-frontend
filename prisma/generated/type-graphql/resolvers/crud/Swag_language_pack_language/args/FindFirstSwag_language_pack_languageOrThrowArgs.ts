import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput";
import { Swag_language_pack_languageWhereInput } from "../../../inputs/Swag_language_pack_languageWhereInput";
import { Swag_language_pack_languageWhereUniqueInput } from "../../../inputs/Swag_language_pack_languageWhereUniqueInput";
import { Swag_language_pack_languageScalarFieldEnum } from "../../../../enums/Swag_language_pack_languageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSwag_language_pack_languageOrThrowArgs {
  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereInput, {
    nullable: true
  })
  where?: Swag_language_pack_languageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_language_pack_languageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_language_pack_languageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "administration_active" | "sales_channel_active" | "language_id" | "created_at" | "updated_at"> | undefined;
}

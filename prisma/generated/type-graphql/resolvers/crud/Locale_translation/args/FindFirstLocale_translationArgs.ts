import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Locale_translationOrderByWithRelationAndSearchRelevanceInput";
import { Locale_translationWhereInput } from "../../../inputs/Locale_translationWhereInput";
import { Locale_translationWhereUniqueInput } from "../../../inputs/Locale_translationWhereUniqueInput";
import { Locale_translationScalarFieldEnum } from "../../../../enums/Locale_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationWhereInput, {
    nullable: true
  })
  where?: Locale_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Locale_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Locale_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"locale_id" | "language_id" | "name" | "territory" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

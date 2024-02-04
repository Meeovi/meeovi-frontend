import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Salutation_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Salutation_translationOrderByWithRelationAndSearchRelevanceInput";
import { Salutation_translationWhereInput } from "../../../inputs/Salutation_translationWhereInput";
import { Salutation_translationWhereUniqueInput } from "../../../inputs/Salutation_translationWhereUniqueInput";
import { Salutation_translationScalarFieldEnum } from "../../../../enums/Salutation_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageSalutation_translationArgs {
  @TypeGraphQL.Field(_type => Salutation_translationWhereInput, {
    nullable: true
  })
  where?: Salutation_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Salutation_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Salutation_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Salutation_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Salutation_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Salutation_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"salutation_id" | "language_id" | "display_name" | "letter_name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

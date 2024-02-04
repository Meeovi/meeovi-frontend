import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_option_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_group_option_translationOrderByWithRelationAndSearchRelevanceInput";
import { Property_group_option_translationWhereInput } from "../../../inputs/Property_group_option_translationWhereInput";
import { Property_group_option_translationWhereUniqueInput } from "../../../inputs/Property_group_option_translationWhereUniqueInput";
import { Property_group_option_translationScalarFieldEnum } from "../../../../enums/Property_group_option_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageProperty_group_option_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_option_translationWhereInput, {
    nullable: true
  })
  where?: Property_group_option_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_option_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Property_group_option_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Property_group_option_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Property_group_option_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Property_group_option_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"property_group_option_id" | "language_id" | "name" | "position" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

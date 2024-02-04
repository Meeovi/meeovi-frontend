import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_type_translationWhereInput } from "../../../inputs/Mail_template_type_translationWhereInput";
import { Mail_template_type_translationWhereUniqueInput } from "../../../inputs/Mail_template_type_translationWhereUniqueInput";
import { Mail_template_type_translationScalarFieldEnum } from "../../../../enums/Mail_template_type_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMail_template_type_translationArgs {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereInput, {
    nullable: true
  })
  where?: Mail_template_type_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_template_type_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"mail_template_type_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}

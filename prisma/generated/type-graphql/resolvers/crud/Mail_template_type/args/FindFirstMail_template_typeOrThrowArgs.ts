import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_template_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_template_typeOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_typeWhereInput } from "../../../inputs/Mail_template_typeWhereInput";
import { Mail_template_typeWhereUniqueInput } from "../../../inputs/Mail_template_typeWhereUniqueInput";
import { Mail_template_typeScalarFieldEnum } from "../../../../enums/Mail_template_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMail_template_typeOrThrowArgs {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  where?: Mail_template_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_template_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_template_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "available_entities" | "created_at" | "updated_at" | "template_data"> | undefined;
}

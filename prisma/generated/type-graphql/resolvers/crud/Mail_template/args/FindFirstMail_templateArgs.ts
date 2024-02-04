import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Mail_templateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Mail_templateOrderByWithRelationAndSearchRelevanceInput";
import { Mail_templateWhereInput } from "../../../inputs/Mail_templateWhereInput";
import { Mail_templateWhereUniqueInput } from "../../../inputs/Mail_templateWhereUniqueInput";
import { Mail_templateScalarFieldEnum } from "../../../../enums/Mail_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMail_templateArgs {
  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Mail_templateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Mail_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "mail_template_type_id" | "system_default" | "created_at" | "updated_at"> | undefined;
}

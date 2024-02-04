import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaUpdateWithoutMediaInput } from "../inputs/Mail_template_mediaUpdateWithoutMediaInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput", {})
export class Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Mail_template_mediaUpdateWithoutMediaInput;
}

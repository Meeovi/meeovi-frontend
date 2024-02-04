import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyMail_templateInput } from "../inputs/Mail_template_mediaCreateManyMail_templateInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateManyMail_templateInputEnvelope", {})
export class Mail_template_mediaCreateManyMail_templateInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateManyMail_templateInput], {
    nullable: false
  })
  data!: Mail_template_mediaCreateManyMail_templateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateManyMail_template_typeInput } from "../inputs/Mail_templateCreateManyMail_template_typeInput";

@TypeGraphQL.InputType("Mail_templateCreateManyMail_template_typeInputEnvelope", {})
export class Mail_templateCreateManyMail_template_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_templateCreateManyMail_template_typeInput], {
    nullable: false
  })
  data!: Mail_templateCreateManyMail_template_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

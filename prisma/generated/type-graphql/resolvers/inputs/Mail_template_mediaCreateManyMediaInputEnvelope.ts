import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyMediaInput } from "../inputs/Mail_template_mediaCreateManyMediaInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateManyMediaInputEnvelope", {})
export class Mail_template_mediaCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateManyMediaInput], {
    nullable: false
  })
  data!: Mail_template_mediaCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateManyTagInput } from "../inputs/Newsletter_recipient_tagCreateManyTagInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateManyTagInputEnvelope", {})
export class Newsletter_recipient_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Newsletter_recipient_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

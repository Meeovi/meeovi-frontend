import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCreateManyTagInput } from "../inputs/Landing_page_tagCreateManyTagInput";

@TypeGraphQL.InputType("Landing_page_tagCreateManyTagInputEnvelope", {})
export class Landing_page_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Landing_page_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Landing_page_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

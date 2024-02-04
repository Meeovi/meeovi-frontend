import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateManyCms_pageInput } from "../inputs/Landing_pageCreateManyCms_pageInput";

@TypeGraphQL.InputType("Landing_pageCreateManyCms_pageInputEnvelope", {})
export class Landing_pageCreateManyCms_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [Landing_pageCreateManyCms_pageInput], {
    nullable: false
  })
  data!: Landing_pageCreateManyCms_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

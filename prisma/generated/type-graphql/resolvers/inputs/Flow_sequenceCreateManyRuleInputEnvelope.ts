import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyRuleInput } from "../inputs/Flow_sequenceCreateManyRuleInput";

@TypeGraphQL.InputType("Flow_sequenceCreateManyRuleInputEnvelope", {})
export class Flow_sequenceCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateManyRuleInput], {
    nullable: false
  })
  data!: Flow_sequenceCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

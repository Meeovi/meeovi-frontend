import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceUpdateWithoutRuleInput } from "../inputs/Flow_sequenceUpdateWithoutRuleInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput", {})
export class Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateWithoutRuleInput, {
    nullable: false
  })
  data!: Flow_sequenceUpdateWithoutRuleInput;
}

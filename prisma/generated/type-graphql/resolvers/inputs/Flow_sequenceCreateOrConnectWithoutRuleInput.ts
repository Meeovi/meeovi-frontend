import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutRuleInput } from "../inputs/Flow_sequenceCreateWithoutRuleInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateOrConnectWithoutRuleInput", {})
export class Flow_sequenceCreateOrConnectWithoutRuleInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutRuleInput;
}

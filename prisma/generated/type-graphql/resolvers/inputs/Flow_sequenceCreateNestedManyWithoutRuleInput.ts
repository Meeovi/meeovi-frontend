import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyRuleInputEnvelope } from "../inputs/Flow_sequenceCreateManyRuleInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutRuleInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutRuleInput";
import { Flow_sequenceCreateWithoutRuleInput } from "../inputs/Flow_sequenceCreateWithoutRuleInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceCreateNestedManyWithoutRuleInput", {})
export class Flow_sequenceCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput[] | undefined;
}

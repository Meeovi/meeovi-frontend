import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyRuleInputEnvelope } from "../inputs/Flow_sequenceCreateManyRuleInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutRuleInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutRuleInput";
import { Flow_sequenceCreateWithoutRuleInput } from "../inputs/Flow_sequenceCreateWithoutRuleInput";
import { Flow_sequenceScalarWhereInput } from "../inputs/Flow_sequenceScalarWhereInput";
import { Flow_sequenceUpdateManyWithWhereWithoutRuleInput } from "../inputs/Flow_sequenceUpdateManyWithWhereWithoutRuleInput";
import { Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput } from "../inputs/Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput";
import { Flow_sequenceUpsertWithWhereUniqueWithoutRuleInput } from "../inputs/Flow_sequenceUpsertWithWhereUniqueWithoutRuleInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateManyWithoutRuleNestedInput", {})
export class Flow_sequenceUpdateManyWithoutRuleNestedInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpsertWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  upsert?: Flow_sequenceUpsertWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  set?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  delete?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceWhereUniqueInput], {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput], {
    nullable: true
  })
  update?: Flow_sequenceUpdateWithWhereUniqueWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateManyWithWhereWithoutRuleInput], {
    nullable: true
  })
  updateMany?: Flow_sequenceUpdateManyWithWhereWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Flow_sequenceScalarWhereInput[] | undefined;
}

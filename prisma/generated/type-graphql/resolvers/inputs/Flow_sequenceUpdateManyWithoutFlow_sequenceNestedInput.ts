import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateManyFlow_sequenceInputEnvelope } from "../inputs/Flow_sequenceCreateManyFlow_sequenceInputEnvelope";
import { Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput";
import { Flow_sequenceCreateWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutFlow_sequenceInput";
import { Flow_sequenceScalarWhereInput } from "../inputs/Flow_sequenceScalarWhereInput";
import { Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput";
import { Flow_sequenceUpdateWithWhereUniqueWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceUpdateWithWhereUniqueWithoutFlow_sequenceInput";
import { Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput", {})
export class Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput {
  @TypeGraphQL.Field(_type => [Flow_sequenceCreateWithoutFlow_sequenceInput], {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput], {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput], {
    nullable: true
  })
  upsert?: Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateManyFlow_sequenceInputEnvelope, {
    nullable: true
  })
  createMany?: Flow_sequenceCreateManyFlow_sequenceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateWithWhereUniqueWithoutFlow_sequenceInput], {
    nullable: true
  })
  update?: Flow_sequenceUpdateWithWhereUniqueWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput], {
    nullable: true
  })
  updateMany?: Flow_sequenceUpdateManyWithWhereWithoutFlow_sequenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [Flow_sequenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Flow_sequenceScalarWhereInput[] | undefined;
}

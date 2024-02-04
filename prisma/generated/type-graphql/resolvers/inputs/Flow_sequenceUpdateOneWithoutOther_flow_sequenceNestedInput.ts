import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput";
import { Flow_sequenceCreateWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutOther_flow_sequenceInput";
import { Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput";
import { Flow_sequenceUpsertWithoutOther_flow_sequenceInput } from "../inputs/Flow_sequenceUpsertWithoutOther_flow_sequenceInput";
import { Flow_sequenceWhereInput } from "../inputs/Flow_sequenceWhereInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateOneWithoutOther_flow_sequenceNestedInput", {})
export class Flow_sequenceUpdateOneWithoutOther_flow_sequenceNestedInput {
  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  create?: Flow_sequenceCreateWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  connectOrCreate?: Flow_sequenceCreateOrConnectWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceUpsertWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  upsert?: Flow_sequenceUpsertWithoutOther_flow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  disconnect?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereInput, {
    nullable: true
  })
  delete?: Flow_sequenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: true
  })
  connect?: Flow_sequenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput, {
    nullable: true
  })
  update?: Flow_sequenceUpdateToOneWithWhereWithoutOther_flow_sequenceInput | undefined;
}

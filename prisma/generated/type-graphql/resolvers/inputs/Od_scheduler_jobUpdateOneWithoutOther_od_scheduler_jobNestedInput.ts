import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobUpsertWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpsertWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobWhereInput } from "../inputs/Od_scheduler_jobWhereInput";
import { Od_scheduler_jobWhereUniqueInput } from "../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput", {})
export class Od_scheduler_jobUpdateOneWithoutOther_od_scheduler_jobNestedInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput, {
    nullable: true
  })
  create?: Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput, {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpsertWithoutOther_od_scheduler_jobInput, {
    nullable: true
  })
  upsert?: Od_scheduler_jobUpsertWithoutOther_od_scheduler_jobInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  disconnect?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  delete?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: true
  })
  connect?: Od_scheduler_jobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput, {
    nullable: true
  })
  update?: Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput | undefined;
}

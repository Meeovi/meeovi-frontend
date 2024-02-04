import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope } from "../inputs/Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope";
import { Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobCreateWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateWithoutOd_scheduler_jobInput";
import { Od_scheduler_jobWhereUniqueInput } from "../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput", {})
export class Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_jobCreateWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  create?: Od_scheduler_jobCreateWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput], {
    nullable: true
  })
  connectOrCreate?: Od_scheduler_jobCreateOrConnectWithoutOd_scheduler_jobInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope, {
    nullable: true
  })
  createMany?: Od_scheduler_jobCreateManyOd_scheduler_jobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobWhereUniqueInput], {
    nullable: true
  })
  connect?: Od_scheduler_jobWhereUniqueInput[] | undefined;
}

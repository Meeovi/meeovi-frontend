import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobWhereUniqueInput } from "../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.InputType("Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput", {})
export class Od_scheduler_jobCreateOrConnectWithoutOther_od_scheduler_jobInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: false
  })
  where!: Od_scheduler_jobWhereUniqueInput;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput, {
    nullable: false
  })
  create!: Od_scheduler_jobCreateWithoutOther_od_scheduler_jobInput;
}

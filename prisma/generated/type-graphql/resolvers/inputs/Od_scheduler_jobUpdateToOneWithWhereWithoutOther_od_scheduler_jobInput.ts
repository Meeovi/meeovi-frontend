import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobUpdateWithoutOther_od_scheduler_jobInput } from "../inputs/Od_scheduler_jobUpdateWithoutOther_od_scheduler_jobInput";
import { Od_scheduler_jobWhereInput } from "../inputs/Od_scheduler_jobWhereInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput", {})
export class Od_scheduler_jobUpdateToOneWithWhereWithoutOther_od_scheduler_jobInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateWithoutOther_od_scheduler_jobInput, {
    nullable: false
  })
  data!: Od_scheduler_jobUpdateWithoutOther_od_scheduler_jobInput;
}

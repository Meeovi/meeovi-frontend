import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobScalarWhereInput } from "../inputs/Od_scheduler_jobScalarWhereInput";
import { Od_scheduler_jobUpdateManyMutationInput } from "../inputs/Od_scheduler_jobUpdateManyMutationInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput", {})
export class Od_scheduler_jobUpdateManyWithWhereWithoutOd_scheduler_jobInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobScalarWhereInput, {
    nullable: false
  })
  where!: Od_scheduler_jobScalarWhereInput;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateManyMutationInput, {
    nullable: false
  })
  data!: Od_scheduler_jobUpdateManyMutationInput;
}

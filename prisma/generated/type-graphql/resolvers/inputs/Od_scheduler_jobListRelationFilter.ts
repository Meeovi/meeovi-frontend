import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobWhereInput } from "../inputs/Od_scheduler_jobWhereInput";

@TypeGraphQL.InputType("Od_scheduler_jobListRelationFilter", {})
export class Od_scheduler_jobListRelationFilter {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  every?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  some?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  none?: Od_scheduler_jobWhereInput | undefined;
}

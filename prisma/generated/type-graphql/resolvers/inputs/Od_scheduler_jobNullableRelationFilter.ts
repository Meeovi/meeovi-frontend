import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobWhereInput } from "../inputs/Od_scheduler_jobWhereInput";

@TypeGraphQL.InputType("Od_scheduler_jobNullableRelationFilter", {})
export class Od_scheduler_jobNullableRelationFilter {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  is?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  isNot?: Od_scheduler_jobWhereInput | undefined;
}

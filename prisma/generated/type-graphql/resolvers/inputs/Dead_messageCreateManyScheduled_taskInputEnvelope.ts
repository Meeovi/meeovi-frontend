import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageCreateManyScheduled_taskInput } from "../inputs/Dead_messageCreateManyScheduled_taskInput";

@TypeGraphQL.InputType("Dead_messageCreateManyScheduled_taskInputEnvelope", {})
export class Dead_messageCreateManyScheduled_taskInputEnvelope {
  @TypeGraphQL.Field(_type => [Dead_messageCreateManyScheduled_taskInput], {
    nullable: false
  })
  data!: Dead_messageCreateManyScheduled_taskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

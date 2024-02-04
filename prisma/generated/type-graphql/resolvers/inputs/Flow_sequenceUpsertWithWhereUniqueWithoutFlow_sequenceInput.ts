import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Flow_sequenceCreateWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceCreateWithoutFlow_sequenceInput";
import { Flow_sequenceUpdateWithoutFlow_sequenceInput } from "../inputs/Flow_sequenceUpdateWithoutFlow_sequenceInput";
import { Flow_sequenceWhereUniqueInput } from "../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.InputType("Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput", {})
export class Flow_sequenceUpsertWithWhereUniqueWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateWithoutFlow_sequenceInput, {
    nullable: false
  })
  update!: Flow_sequenceUpdateWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => Flow_sequenceCreateWithoutFlow_sequenceInput, {
    nullable: false
  })
  create!: Flow_sequenceCreateWithoutFlow_sequenceInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyProductInput } from "../inputs/Main_categoryCreateManyProductInput";

@TypeGraphQL.InputType("Main_categoryCreateManyProductInputEnvelope", {})
export class Main_categoryCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Main_categoryCreateManyProductInput], {
    nullable: false
  })
  data!: Main_categoryCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyUserInput } from "../inputs/Import_export_logCreateManyUserInput";

@TypeGraphQL.InputType("Import_export_logCreateManyUserInputEnvelope", {})
export class Import_export_logCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [Import_export_logCreateManyUserInput], {
    nullable: false
  })
  data!: Import_export_logCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

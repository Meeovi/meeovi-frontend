import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_logCreateManyUserInputEnvelope } from "../inputs/Import_export_logCreateManyUserInputEnvelope";
import { Import_export_logCreateOrConnectWithoutUserInput } from "../inputs/Import_export_logCreateOrConnectWithoutUserInput";
import { Import_export_logCreateWithoutUserInput } from "../inputs/Import_export_logCreateWithoutUserInput";
import { Import_export_logWhereUniqueInput } from "../inputs/Import_export_logWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_logCreateNestedManyWithoutUserInput", {})
export class Import_export_logCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [Import_export_logCreateWithoutUserInput], {
    nullable: true
  })
  create?: Import_export_logCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_logCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_logCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_logCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_logWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateOrConnectWithoutOther_documentInput } from "../inputs/DocumentCreateOrConnectWithoutOther_documentInput";
import { DocumentCreateWithoutOther_documentInput } from "../inputs/DocumentCreateWithoutOther_documentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateNestedOneWithoutOther_documentInput", {})
export class DocumentCreateNestedOneWithoutOther_documentInput {
  @TypeGraphQL.Field(_type => DocumentCreateWithoutOther_documentInput, {
    nullable: true
  })
  create?: DocumentCreateWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutOther_documentInput, {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput | undefined;
}

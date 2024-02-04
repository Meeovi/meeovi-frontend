import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateOrConnectWithoutOther_documentInput } from "../inputs/DocumentCreateOrConnectWithoutOther_documentInput";
import { DocumentCreateWithoutOther_documentInput } from "../inputs/DocumentCreateWithoutOther_documentInput";
import { DocumentUpdateToOneWithWhereWithoutOther_documentInput } from "../inputs/DocumentUpdateToOneWithWhereWithoutOther_documentInput";
import { DocumentUpsertWithoutOther_documentInput } from "../inputs/DocumentUpsertWithoutOther_documentInput";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateOneWithoutOther_documentNestedInput", {})
export class DocumentUpdateOneWithoutOther_documentNestedInput {
  @TypeGraphQL.Field(_type => DocumentCreateWithoutOther_documentInput, {
    nullable: true
  })
  create?: DocumentCreateWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateOrConnectWithoutOther_documentInput, {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpsertWithoutOther_documentInput, {
    nullable: true
  })
  upsert?: DocumentUpsertWithoutOther_documentInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  disconnect?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  delete?: DocumentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateToOneWithWhereWithoutOther_documentInput, {
    nullable: true
  })
  update?: DocumentUpdateToOneWithWhereWithoutOther_documentInput | undefined;
}

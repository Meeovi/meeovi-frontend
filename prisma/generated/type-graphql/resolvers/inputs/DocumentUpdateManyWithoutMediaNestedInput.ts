import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyMediaInputEnvelope } from "../inputs/DocumentCreateManyMediaInputEnvelope";
import { DocumentCreateOrConnectWithoutMediaInput } from "../inputs/DocumentCreateOrConnectWithoutMediaInput";
import { DocumentCreateWithoutMediaInput } from "../inputs/DocumentCreateWithoutMediaInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutMediaInput } from "../inputs/DocumentUpdateManyWithWhereWithoutMediaInput";
import { DocumentUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutMediaInput";
import { DocumentUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutMediaInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateManyWithoutMediaNestedInput", {})
export class DocumentUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutMediaInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: DocumentUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  set?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  delete?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: DocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: DocumentUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: DocumentUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DocumentScalarWhereInput[] | undefined;
}

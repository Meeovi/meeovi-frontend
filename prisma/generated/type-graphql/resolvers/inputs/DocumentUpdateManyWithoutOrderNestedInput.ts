import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyOrderInputEnvelope } from "../inputs/DocumentCreateManyOrderInputEnvelope";
import { DocumentCreateOrConnectWithoutOrderInput } from "../inputs/DocumentCreateOrConnectWithoutOrderInput";
import { DocumentCreateWithoutOrderInput } from "../inputs/DocumentCreateWithoutOrderInput";
import { DocumentScalarWhereInput } from "../inputs/DocumentScalarWhereInput";
import { DocumentUpdateManyWithWhereWithoutOrderInput } from "../inputs/DocumentUpdateManyWithWhereWithoutOrderInput";
import { DocumentUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/DocumentUpdateWithWhereUniqueWithoutOrderInput";
import { DocumentUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/DocumentUpsertWithWhereUniqueWithoutOrderInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateManyWithoutOrderNestedInput", {})
export class DocumentUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [DocumentCreateWithoutOrderInput], {
    nullable: true
  })
  create?: DocumentCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: DocumentCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: DocumentUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: DocumentCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [DocumentUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: DocumentUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: DocumentUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DocumentScalarWhereInput[] | undefined;
}

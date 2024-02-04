import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyProduct_streamInputEnvelope } from "../inputs/CategoryCreateManyProduct_streamInputEnvelope";
import { CategoryCreateOrConnectWithoutProduct_streamInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_streamInput";
import { CategoryCreateWithoutProduct_streamInput } from "../inputs/CategoryCreateWithoutProduct_streamInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutProduct_streamInput } from "../inputs/CategoryUpdateManyWithWhereWithoutProduct_streamInput";
import { CategoryUpdateWithWhereUniqueWithoutProduct_streamInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProduct_streamInput";
import { CategoryUpsertWithWhereUniqueWithoutProduct_streamInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProduct_streamInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutProduct_streamNestedInput", {})
export class CategoryUpdateManyWithoutProduct_streamNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutProduct_streamInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutProduct_streamInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}

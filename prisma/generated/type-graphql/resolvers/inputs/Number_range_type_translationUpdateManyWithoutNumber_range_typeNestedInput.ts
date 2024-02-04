import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateManyNumber_range_typeInputEnvelope } from "../inputs/Number_range_type_translationCreateManyNumber_range_typeInputEnvelope";
import { Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput";
import { Number_range_type_translationCreateWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationCreateWithoutNumber_range_typeInput";
import { Number_range_type_translationScalarWhereInput } from "../inputs/Number_range_type_translationScalarWhereInput";
import { Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput";
import { Number_range_type_translationUpdateWithWhereUniqueWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationUpdateWithWhereUniqueWithoutNumber_range_typeInput";
import { Number_range_type_translationUpsertWithWhereUniqueWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationUpsertWithWhereUniqueWithoutNumber_range_typeInput";
import { Number_range_type_translationWhereUniqueInput } from "../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_type_translationUpdateManyWithoutNumber_range_typeNestedInput", {})
export class Number_range_type_translationUpdateManyWithoutNumber_range_typeNestedInput {
  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateWithoutNumber_range_typeInput], {
    nullable: true
  })
  create?: Number_range_type_translationCreateWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_type_translationCreateOrConnectWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpsertWithWhereUniqueWithoutNumber_range_typeInput], {
    nullable: true
  })
  upsert?: Number_range_type_translationUpsertWithWhereUniqueWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateManyNumber_range_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_type_translationCreateManyNumber_range_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpdateWithWhereUniqueWithoutNumber_range_typeInput], {
    nullable: true
  })
  update?: Number_range_type_translationUpdateWithWhereUniqueWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput], {
    nullable: true
  })
  updateMany?: Number_range_type_translationUpdateManyWithWhereWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Number_range_type_translationScalarWhereInput[] | undefined;
}
